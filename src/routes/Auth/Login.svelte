<script>
    import ZonaCiptaLogo from "../../custom/Layout/ZonaCiptaLogo.svelte";
    import Maintitle from '../../custom/Text/Maintitle.svelte'
    import InputForm from '../../custom/Input/InputForm.svelte'
    import Button from '../../custom/Button/Button.svelte'
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    let loginEmail = ''
    let loginPassword = ''

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginEmail, loginPassword)
    }

    const handleReset = () => {
        let loginEmail = ''
        let loginPassword = ''
    }

</script>

<ZonaCiptaLogo/>
<div class="flex flex-col items-center mt-24">
    <Maintitle title="Login" subtitle="Masukkan email dan password anda" size="text-3xl"></Maintitle>
    <div class="w-full px-10 mt-16">
        <form onsubmit={handleSubmit} onreset={handleReset}>
            <InputForm type="" name="email" placeholder="sagungputri@gmail.com" label="Email" value={loginEmail} required={true}/>
            <InputForm type="password" name="password" placeholder="Insert Password" label="Password" value={loginPassword} required={true}/>
            <div class="w-full flex justify-between mt-16 px-5">
                <Button type="submit" text="Submit" variant="solid"/>
                <Button type="reset" text="Reset" variant="solid"/>
            </div>
        </form>
    </div>
    <h4 class="text-brand font-bold mt-10 cursor-pointer" on:click={(e) =>{
        e.preventDefault()
        dispatch('change', 0)
    }}>Belum punya akun?</h4>
</div>

