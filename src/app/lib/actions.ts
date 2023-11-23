'use server'

import {signIn,signOut} from "auth";

export async function authenticate(prevState:string | undefined,formData:FormData) {
    // signIn('credentials',Object.fromEntries(formData));
    console.log("asdf");
    try{
        await signIn('credentials',Object.fromEntries(formData));
    }catch(error){
        if((error as Error).message.includes('CredentialsSignin')  ){
            return 'CredentialSignin';
        }
        throw error;
    }
    
}

export async function authSignOut() {
    try{
        await signOut();
    }catch(error){
        if((error as Error).message.includes('signOut')  ){
            return 'signOut';
        }
        throw error;
    }
    
}