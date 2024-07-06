document.addEventListener('DOMContentLoaded', function () 
{
  //const form=document.getElementById('itemForm');
  //const itemsTableBody = this.getElementById('itemTableBody');
  const form = document.getElementById('itemForm');
  const itemsTableBody = document.getElementById('itemsTableBody');
  //va a cargar la tabla en la vista
  
  function loadItems() {
    fetch('http://localhost/proyectofinal/api/api.php')
      //fetch('https://ceagabe.000webhostapp.com/api/api.php')


      .then(response => response.json())
      .then(data => {
        itemsTableBody.innerHTML = '';  //vacia todo
        if (data.peliculas) {
          data.peliculas.forEach(pelicula => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${pelicula.id} </td>
                        <td>${pelicula.titulo} </td>
                        <td>${pelicula.genero} </td>
                        <td>${pelicula.fecha_lanzamiento} </td>
                        <td>${pelicula.duracion} </td>
                        <td>${pelicula.director} </td>
                        <td>${pelicula.reparto} </td>
                        <td>${pelicula.sinopsis} </td>
                        <td> 
                          <button class ="btn btn-danger" onclick="deleteItem(${pelicula.id})"> Eliminar </button>        
                        </td>
                        <td> 
                          <button class ="btn btn-success" onclick="editItem(
                          ${pelicula.id},
                          '${pelicula.titulo}',
                          '${pelicula.genero}',
                          '${pelicula.fecha_lanzamiento}',
                          '${pelicula.duracion}',
                          '${pelicula.director}',
                          '${pelicula.reparto}',
                          '${pelicula.sinopsis}')"> Editar </button>        
                        </td>
                         `;
            itemsTableBody.appendChild(row);
          });
        }
        else {
          console.log('no hay peliculas');
        }

      })

      .catch(error => console.error('Error=', error));

  }

  //funcion borrar

  function deleteItem(id) {

    fetch('http://localhost/proyectofinal/api/api.php?id=${id}',
      {
        method: 'DELETE',
        heders: {
          'content-Type': 'application/json'
        }

      })
      .then(response => response.json())
      .then(data => {
        loadItems();
      })
      ;
    loadItems();

  }

  window.editItem = function (id, titulo, genero, fecha_lanzamiento, duracion, director, reparto, sinopsis) {
    document.getElementById('id').value = id;
    document.getElementById('titulo').value = titulo;
    document.getElementById('genero').value = genero;
    document.getElementById('fecha_lanzamiento').value = fecha_lanzamiento
    document.getElementById('duracion').value = duracion;
    document.getElementById('director').value = director;
    document.getElementById('reparto').value = reparto;
    document.getElementById('sinopsis').value = sinopsis;

  }

  window.deleteItems = deleteItem;  //galerazo

  loadItems();
});
