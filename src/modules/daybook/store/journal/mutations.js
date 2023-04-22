export const setEntries = ( state, entries ) => {

    // Creamos un nuevo arreglo con los valores anteriores más los nuevos valores
    state.entries = [...state.entries, ...entries ]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) => { // entry actualizada
    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    state.entries[idx] = entry
}

export const addEntry = ( state, entry ) => {
    state.entries = [ entry, ...state.entries ]
}

export const deleteEntry = ( state, id ) => {
    
    state.entries = state.entries.filter( entry => entry.id !== id ) 
    
}

export const clearEntries = ( state ) => {
    
    state.entries = [] 
    
}