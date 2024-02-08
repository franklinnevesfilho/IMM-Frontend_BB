import '../../style/Login.css'

function LoginPage() {

    const LoginForm = () => {
        return (
            <div className={'card login'}>
                <form className={'card-body'}>
                    <div className={'input-container'}>
                        <input type={'email'} id={'username'} name={'username'} placeholder={'E-mail'} required={true} />
                        <input type={'password'} id={'password'} name={'password'} placeholder={'Password'} required={true} />
                    </div>
                    <div className={'btn-container login'}>
                        <button className={'btn login'} type={'submit'}>Login</button>
                        <button className={'btn forgot-password'} type={'button'}>Forgot Password?</button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <>
            <div className={'page login'}>
                {LoginForm()}
            </div>
        </>
    );
}

export default LoginPage;