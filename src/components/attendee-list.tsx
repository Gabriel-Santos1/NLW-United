export function AttendeeList(){
    return(
        <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <input className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm" placeholder="Buscar participantes..." />
        </div>
    )
}