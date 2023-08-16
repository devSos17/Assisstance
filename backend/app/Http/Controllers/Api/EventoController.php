<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Eventos;
use Illuminate\Http\Request;


class EventoController extends Controller
{
   
    public function index()
    {
        $Eventos = Eventos::all();
        return $Eventos;
    }

    public function store(Request $request)
    {
        $Evento = new Eventos();
        
        $Evento->Nombre = $request->Nombre;
        $Evento->organizador_id = $request->organizador_id;
        $Evento->Lugar = $request->Lugar;
        $Evento->Fecha_inicio = $request->Fecha_inicio;
        $Evento->Fecha_fin = $request->Fecha_fin;
        $Evento->Capacidad = $request->Capacidad;
        $Evento->Ponente = $request->Ponente;
        $Evento->Descripcion = $request->Descripcion;
        
        

        $Evento->save();
    }

    
    public function show($id)
    {
       $Evento = Eventos::find($id);
       return response()->json($Evento);
    }

    public function update(Request $request,  $id)
    {
        $Evento = Eventos::find($id);
        $Evento->Nombre = $request->Nombre;
        
        $Evento->Lugar = $request->Lugar;
        $Evento->Fecha_inicio = $request->Fecha_inicio;
        $Evento->Fecha_fin = $request->Fecha_fin;
        $Evento->Capacidad = $request->Capacidad;
        $Evento->Ponente = $request->Ponente;
        $Evento->Descripcion = $request->Descripcion;

        $Evento->save();
        return response()->json($Evento);

    }

    public function destroy($id)
    {
        $Evento = Eventos::destroy($id);
        return response()->json($Evento);
    }
}
