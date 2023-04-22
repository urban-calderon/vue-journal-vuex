/* export const myAction = async ( { commit } ) => {

} */
// accion para registrar usuario
import authApi from "@/api/authApi"

export const createUser = async ( { commit }, user ) => {

    const { name, email, password } = user

    try {
        
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken:true})
        const { idToken, refreshToken } = data

        // mandamos el nombre del usuario
        await authApi.post(':update', { displayName: name, idToken })
        
        // eliminamos el password de la respuesta 
        delete user.password
        // hacemos el commit de la mutacion
        commit('loginUser', { user, idToken, refreshToken })

        // TODO: Mutation loginUser
        return { ok: true }


    } catch (error) {
        
        return { ok: false, message: error.response.data.error.message }
    }
}

// accion para loguear a el usuario
export const signUser = async ( { commit }, user ) => {

    const { email, password } = user

    try {
        
        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken:true})
        const { displayName, idToken, refreshToken } = data

        user.name = displayName

        // hacemos el commit de la mutacion
        commit('loginUser', { user, idToken, refreshToken })

        // TODO: Mutation loginUser
        return { ok: true }


    } catch (error) {
        
        return { ok: false, message: error.response.data.error.message }
    }
}

export const checkAuthentication = async ({ commit }) => {

    const idToken      = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if( !idToken ) {
        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    try {
        
        const { data } = await authApi.post(':lookup', { idToken })
        // console.log(data)
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email
        }

        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.error.message }
    }

}