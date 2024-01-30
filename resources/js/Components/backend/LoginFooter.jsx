function LoginFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="auth-footer text-center">
            &copy; Copyright {currentYear}, Ridho Amdeni.
        </div>
    )
}

export default LoginFooter