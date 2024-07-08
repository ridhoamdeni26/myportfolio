import { useEffect } from 'react';
import { useToasts } from "react-toast-notifications";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import LoginButton from '@/Components/backend/LoginButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

function LoginForm() {
    const { addToast } = useToasts();

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
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
        <div className="auth-box h-full flex flex-col justify-center">
            <div className="mobile-logo text-center mb-6 lg:hidden block">
                <a href="index.html">
                    <img src="assetsadmin/images/logo/logo.svg" alt="" className="mb-10 dark_logo" />
                </a>
            </div>
            <div className="text-center 2xl:mb-10 mb-4">
                <h4 className="font-medium">Sign in</h4>
            </div>
            <form onSubmit={submit} className="space-y-4">
                <div className="fromGroup">
                    <InputLabel className='block capitalize form-label' htmlFor="email" value="Email" />

                    <div className="relative ">
                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            placeholder="Enter your email"
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                </div>
                <div className="fromGroup">
                    <InputLabel className='block capitalize form-label' htmlFor="password" value="password" />

                    <div className="relative ">

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            placeholder="Enter your password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>
                </div>
                <LoginButton disabled={processing}> Log In</LoginButton>
            </form>
        </div>
    )
}

export default LoginForm