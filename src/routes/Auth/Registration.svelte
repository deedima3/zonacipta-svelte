<script>
    import ZonaCiptaLogo from "../../custom/Layout/ZonaCiptaLogo.svelte";
    import Maintitle from '../../custom/Text/Maintitle.svelte'
    import InputForm from '../../custom/Input/InputForm.svelte'
    import Button from '../../custom/Button/Button.svelte'

    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    let registerName = ''
    let registerPassword = ''
    let registerConfirmation = ''
    let registerEmail = ''

    const handleSubmit = () => {
        const checkName = (name) => {
            let check = new RegExp("[A-Za-z]")
            return check.test(name)
        }

        const checkEmail = (email) => {
            let check = new RegExp("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$")
            return check.test(email)
        }
        
        const checkPassword = (password, passwordConfirm) => {
            return password === passwordConfirm
        }
        
        return checkEmail(registerEmail) || checkName(registerName) || checkPassword(registerPassword, registerConfirmation)
    }



    const handleReset = () => {

    }

</script>

<ZonaCiptaLogo/>
<div class="flex flex-col items-center mt-16">
    <Maintitle title="Registrasi" subtitle="Daftar Untuk Menggunakan" size="text-3xl"></Maintitle>
    <div class="w-full px-10 mt-8">
        <form onsubmit={handleSubmit} onreset={handleReset}>
            <InputForm type="" name="register" placeholder="Sagung Putri" label="Nama" value={registerName} required={true}/>
            <InputForm type="" name="email" placeholder="sagungputri@gmail.com" label="E-mail" value={registerEmail} required={true}/>
            <InputForm type="password" name="password" placeholder="Insert Password" label="Password" value={registerPassword} required={true}/>
            <InputForm type="password" name="passwordConfirmation" placeholder="Confirmation Password" label="Password Confirmation" value={registerConfirmation} required={true}/>
            <div class="w-full flex justify-between mt-16 px-5">
                <Button type="submit" text="Submit" variant="solid"/>
                <Button type="reset" text="Reset" variant="outlined"/>
            </div>
        </form>
    </div>
    <h4 class="text-brand font-bold mt-10 cursor-pointer" on:click={(e) =>{
        e.preventDefault()
        dispatch('change', 1)
    }}>Sudah punya akun?</h4>
</div>

