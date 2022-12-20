<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use App\Models\Catalogo;
use Illuminate\Http\Request;

class ControllerArticulo extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $datos = Articulo::where('estado',1)->get();

        return $datos;


        return view('articulos.index')->with('datos',$datos);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {

        
        $datos = Articulo::where('estado',1)->get();

        dd($datos);
        return response()->json($datos);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $consulta = Catalogo::where('id',$id)->get();
        //dd($consulta);

        return response()->json($consulta);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // sleep(2);
        $articulo = Articulo::find($request->id);

        $articulo->observacion = $request->observacion;
        $articulo->estado = $request->estado;
        $articulo->save();


        return response()->json(['mensaje'=>'Procesado Correctamente']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
    }
}
