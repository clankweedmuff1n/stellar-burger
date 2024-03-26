import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {setForgotPasswordFormValue, forgotPassword} from "../../services/actions/userAction";
import {Link, useNavigate} from 'react-router-dom';
import {ChangeEvent, FormEvent} from "react";
import {useDispatch, useSelector} from "../../services/hooks";

export default function ForgottenPasswordPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {forgotPasswordForm} = useSelector((store) => store.userReducer);

    function fieldOnChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch(setForgotPasswordFormValue(e.target.name, e.target.value));
    }

    function forgottenPasswordFormSubmit(e: FormEvent) {
        e.preventDefault();
        dispatch(forgotPassword(forgotPasswordForm, () => navigate('/reset-password')))
    }

    return (
        <section className="mt-[180px] flex justify-center">
            <div className="flex flex-col items-center">
                <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
                <form className="flex flex-col items-center gap-6" onSubmit={forgottenPasswordFormSubmit}>
                    <EmailInput
                        placeholder="Укажите e-mail"
                        value={forgotPasswordForm.email}
                        name='email'
                        onChange={fieldOnChange}
                    />
                    <Button htmlType="submit" type='primary' size="medium">Восстановить</Button>
                </form>
                <p className="text text_type_main-default">
                    Вспомнили пароль?
                    <Link to='/login' className="mt-[80px] inline-block no-underline ml-[9px] text-purple">
                        Войти
                    </Link>
                </p>
            </div>
        </section>
    )
}