import supabase from "./supabase"
export const userSignUp = async ({fullName,email,password})=>{
    let { data, error } = await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{
                fullName:fullName,
                avatar:""
            }
        }
      })
      if(error){
        throw new Error(error.message)
    }
    return data
}
export const login = async ({email,password})=>{
    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
    if(error){
        throw new Error(error.message)
    }
    return data
}
export const loginGuest = async ({email,password})=>{
    let { data, error } = await supabase.auth.signInWithPassword({
        email:"thahsi@gmail.com",
        password:"pass123"
      })
    if(error){
        throw new Error(error.message)
    }
    return data
}

export const currentUser = async ()=>{
    let {data:session} = await supabase.auth.getSession()
    if(!session.session) return null
    let {data,error} = await supabase.auth.getUser()
    if(error){
        throw new Error(error.message)
    }
    return data?.user
}

export const logout = async ()=>{
    let {error} = await supabase.auth.signOut()
    if(error){
        throw new Error(error.message)
    }
}