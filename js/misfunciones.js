
function traerInformacion(){
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    })
}

function traerInformacionClient(){
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta.items)
            
        }

    })
}

function traerInformacionMessage(){
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta.items)
        }

    })
}

function pintarRespuesta(items){

    let myTable = "<table>";
    myTable+= "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Owner"+"</th>"+"<th>"+"Capacity"+"</th>"+"<th>"+"Category_id"+"</th>"+"<th>"+"Name"+"</th>"+"</tr>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].owner+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button class='botonEliminar' onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>"
    $("#resultado").append(myTable);


}

function pintarRespuestaClient(items){

    let myTable = "<table>";
    myTable+= "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Email"+"</th>"+"<th>"+"Age"+"</th>"+"</tr>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoClient("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>"
    $("#resultado2").append(myTable);

}

function pintarRespuestaMessage(items){

    let myTable3 = "<table>";
    myTable3+= "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Message Text"+"</th>"+"</tr>"
    for(i=0;i<items.length;i++){
        myTable3+="<tr>";
        myTable3+="<td>"+items[i].id+"</td>";
        myTable3+="<td>"+items[i].messagetext+"</td>";
        myTable3+="<td> <button onclick='borrarElementoMessage("+items[i].id+")'>Borrar</button>";
        myTable3+="</tr>";
    }
    myTable3+="</table>"
    $("#resultado3").append(myTable3);

}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha guardado el dato correctamente!")
        }
    });
}

function guardarInformacionClient(){
    let myData={
        id:$("#idclient").val(),
        name:$("#nameclient").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idclient").val("");
            $("#nameclient").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("Se ha guardado el dato correctamente!")
        }
    });
}


function guardarInformacionMessage(){
    let myData={
        id:$("#idmessage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idmessage").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("Se ha guardado el dato correctamente!")
        }
    });
}


function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#owner").val(),
        model:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha actualizado correctamente!")
        }
    });
}

function editarInformacionClient(){
    let myData={
        id:$("#idclient").val(),
        name:$("#nameclient").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idclient").val("");
            $("#nameclient").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("Se ha actualizado correctamente!")
        }
    });
}

function editarInformacionMessage(){
    let myData={
        id:$("#idmessage").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idmessage").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("Se ha actualizado correctamente!")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado correctamente!")
        }
    });
}

function borrarElementoClient(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionClient();
            alert("Se ha eliminado correctamente!")
        }
    });
}

function borrarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge16902d6c5c775-db202109230617.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMessage();
            alert("Se ha eliminado correctamente!")
        }
    });
}


