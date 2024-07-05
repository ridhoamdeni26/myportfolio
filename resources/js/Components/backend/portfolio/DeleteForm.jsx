import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { useToasts } from "react-toast-notifications";

function DeleteForm({ id }) {
    const { addToast } = useToasts();
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this data!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("portfolio.delete", { id }), {
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
            }
        });
    };
    return (
        <button className="action-btn" type="button" onClick={handleDelete}>
            <Icon icon="heroicons:trash"></Icon>
        </button>
    )
}

export default DeleteForm