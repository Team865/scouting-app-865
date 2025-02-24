'use client'

import { sendReport } from "@/app/lib/backend";
import { AppContext } from "@/app/lib/context";
import Button from "@/app/ui/Button";
import TextField from "@/app/ui/TextField";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useContext, useState } from "react";

type Status = {
  code?: number,
  text?: string
}

export default function SubmitPage() {
  const context = useContext(AppContext);
  const [commentary, setCommentary] = useState(context.commentary);
  const [status, setStatus] = useState<Status | undefined>(undefined);
  const [body, setBody] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  const send = () => {
    const error = !context.check();
    // check the app data for errors
    setError(error);

    // clear status and body
    setStatus(undefined);
    setBody(undefined);

    // if the data is good, send it
    if (!error) {
      sendReport(context).then((value?: Response) => {
        setStatus({ code: value?.status, text: value?.statusText });
        return value?.text();
      }).then((text?: string) => {
        setBody(text);
      });
      context.clear();
      setCommentary(context.commentary);
    }

    // open the dialog to show the outcome
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Submit</p>
      </div>
      <div className="flex flex-col m-4 w-min justify-center">
        <TextField inputName="submit-commentary" className="m-2" defaultValue={commentary} onChange={e => {
          context.commentary = e.target.value;
          setCommentary(context.commentary);
        }}>Commentary</TextField>
        <Button className="m-2" onClick={send}>Submit</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border border-gray-900 bg-[--background] p-4">
              <DialogTitle className="text-lg font-bold">Report{error ? " not" : ""} sent</DialogTitle>
              <Description>{error ? "One or more required fields is empty" : ""}</Description>
              {
                // show the backend response in test mode
                context.isTest && body != undefined && status != undefined ? (
                  <p>
                    Backend response: {status.code} {status.text}{status.code != 200 ? `: ${body}` : ""}
                  </p>
                ) : ""
              }
              <div className="flex gap-4">
                <Button onClick={() => setIsOpen(false)}>OK</Button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
