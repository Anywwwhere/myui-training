'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(_: unknown, formData: FormData) {
    const rawFormData = {
        identifier: formData.get('email'),
        password: formData.get('password'),
    }

    const headers: Headers = new Headers({
        'Content-Type': 'application/json',
    });

    const res = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(rawFormData),

    })

    if (!res.ok) {
        return { message: 'Please enter valid information' }
    }

    const data = await res.json()
    const cookieStore = await cookies()
    cookieStore.set('token', data.jwt, { secure: true })

    redirect('/')
}