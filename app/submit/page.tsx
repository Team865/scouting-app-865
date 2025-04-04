"use client";

import { sendReport } from "@/app/lib/backend";
import { AppContext } from "@/app/lib/context";
import Button from "@/app/ui/Button";
import TextArea from "@/app/ui/TextArea";
import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import { useContext, useState } from "react";

type Status = {
	code?: number;
	text?: string;
};

export default function SubmitPage() {
	const context = useContext(AppContext);
	const [commentary, setCommentary] = useState(context.commentary);
	const [status, setStatus] = useState<Status | undefined>(undefined);
	const [body, setBody] = useState<string | undefined>(undefined);
	const [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState(false);
	const [backendError, setBackendError] = useState(false);
	const [image, setImage] = useState(0);

	const images = [
		{ person: "Mr. Hibbert", href: "/hibbert.jpg" },
		//{person: "Simon", href: "simon.jpg"},
		{
			person: "Mr. Franzen",
			href: "/tej2o1-01_d-joe_franzen-easter-egg-1.webp",
		},
		{
			person: "Mr. Franzen",
			href: "/tej2o1-01_d-joe_franzen-easter-egg-2.webp",
		},
		{
			person: "Mr. Franzen",
			href: "/tej2o1-01_d-joe_franzen-easter-egg-3.webp",
		},
		{
			person: "Mr. Franzen",
			href: "/tej2o1-01_d-joe_franzen-easter-egg-4.webp",
		},
		{
			person: "Mr. Franzen",
			href: "/tej2o1-01_d-joe_franzen-easter-egg-5.jpg",
		},
	];

	const send = () => {
		const error = !context.check();
		// check the app data for errors
		setError(error);
		setBackendError(false);

		// clear status and body
		setStatus(undefined);
		setBody(undefined);

		// pick a franzen image
		setImage(Math.floor(Math.random() * 10) % (images.length - 1));

		// if the data is good, send it
		let status: Status | undefined = undefined;
		if (!error) {
			sendReport(context)
				.then((value?: Response) => {
					// get the status
					status = { code: value?.status, text: value?.statusText };
					setStatus(status);

					// clear if report was successful
					if (status != undefined && status?.code == 200) {
                        if (!context.isTest) {
    						context.clear();
                        }
						setCommentary(context.commentary);
					} else {
						setBackendError(true);
					}

					// return the body promise
					return value?.text();
				})
				.then((text?: string) => {
					// get the body
					setBody(text);
				})
				.catch(() => {
					setBackendError(true);
				});
		}

		// open the dialog to show the outcome
		setIsOpen(true);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col m-4 w-full justify-center">
				<p className="text-lg text-center">Submit</p>
			</div>
			<div className="flex flex-col m-4 w-[75%] justify-center">
				<TextArea
					inputName="submit-commentary"
					className="m-2 w-full"
					defaultValue={commentary}
					onChange={(e) => {
						context.commentary = e.target.value;
						setCommentary(context.commentary);
					}}
				>
					Commentary
				</TextArea>
				<Button className="m-2" onClick={send}>
					Submit
				</Button>
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className="relative z-50"
				>
					<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
						<DialogPanel className="max-w-lg space-y-4 border border-gray-900 bg-[--background] p-4">
							<DialogTitle className="text-lg font-bold">
								Report{error || backendError ? " not" : ""}{" "}
								{body != undefined && status != undefined
									? "sent"
									: "sending"}
							</DialogTitle>
							<Description>
								{error ? (
									<p>One or more required fields is empty</p>
								) : (
									<div>
										<p>
											{
												// show the backend response in test mode
												(context.isTest ||
													backendError) &&
												body != undefined &&
												status != undefined
													? `Backend response: ${status.code} ${status.text}${status.code != 200 ? body : ""}`
													: ""
											}
										</p>
										<p>
											{body != undefined &&
											status != undefined
												? "Data sent"
												: "Please wait for the data to send"}
										</p>
									</div>
								)}
								<div>
									<a
										href="https://mfranzen.ca"
										target="_blank"
									>
										{images[image].person}
									</a>
									<Image
										src={images[image].href}
										width={150}
										height={250}
										alt={images[image].person}
									/>
								</div>
							</Description>
							<div className="flex gap-4">
								<Button onClick={() => setIsOpen(false)}>
									OK
								</Button>
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>
		</div>
	);
}
