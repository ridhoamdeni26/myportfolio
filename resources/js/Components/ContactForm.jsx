import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useToasts } from "react-toast-notifications";

export default function ContactForm() {
    const { addToast } = useToasts();

    const { data, setData, post, errors } = useForm({
        fullname: "",
        email: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("portfolio.contact.post"), {
            onSuccess: (page) => {
                if (page.props.toast) {
                    const { type, message } = page.props.toast;
                    addToast(message, {
                        appearance: type,
                        autoDismiss: true,
                        autoDismissTimeout: 5000,
                    });
                }
            },
            onError: (errors) => {
                Object.keys(errors).forEach((fieldName) => {
                    const errorMessage = errors[fieldName];
                    addToast(errorMessage, {
                        appearance: "error",
                        autoDismiss: true,
                        autoDismissTimeout: 5000,
                    });
                });
            },
        });
    };

    return (
        <div className="right w-1/2 pl-[50px]">
            <div className="fields w-full float-left h-auto clear-both">
                <form onSubmit={submit}>
                    <div
                        className="returnmessage"
                        data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div className="empty_notice">
                        <span>Please Fill Required Fields</span>
                    </div>
                    <div className="first w-full float-left">
                        <ul>
                            <li className="w-full mb-[25px] float-left">
                                <input
                                    id="fullname"
                                    type="text"
                                    name="fullname"
                                    placeholder="Enter your fullname"
                                    autoComplete="off"
                                    onChange={(e) =>
                                        setData("fullname", e.target.value)
                                    }
                                    value={data.fullname}
                                    required
                                />

                                <InputError
                                    message={errors.fullname}
                                    className="mt-2"
                                />
                            </li>
                            <li className="w-full mb-[25px] float-left">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Your email"
                                    autoComplete="off"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    value={data.email}
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="last mb-5">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write something..."
                            onChange={(e) => setData("message", e.target.value)}
                            value={data.message}
                            required
                        ></textarea>

                        <InputError message={errors.message} />
                    </div>
                    <div className="elisc_tm_button">
                        <PrimaryButton>Submit now</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
