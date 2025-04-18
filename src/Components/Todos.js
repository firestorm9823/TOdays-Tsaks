// // import React from 'react'
// // import TodoItem  from "./TodoItem";

// // export default function Todos(props) {

// //   let mystyle={
// //     minHeight:"70vh",
// //     margin:"10px auto"
// //   }

// //   return (
// //     <>
// //     <div className="container my-3" style={mystyle}>
// //       <h3 className=' my-5'>Todos List</h3>  

// //       {props.todos.length===0? "No Todos to display ":
// //       props.todos.map((todo)=>{
// //         return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
// //       })

// //     }
   

           
// //     </div>

// //     </>
// //   )
// // }


// import React from 'react'
// import TodoItem from "./TodoItem";

// export default function Todos({ todos, onDelete, onUpdate ,onToggleComplete }) {
//   let mystyle = {
//     minHeight: "70vh",
//     margin: "10px auto"
//   };

//   return (
//     <>
//       <div className="container my-3" style={mystyle}>
//         <h3 className='my-5'>Todos List</h3>

//         {todos.length === 0 ? (
//           "No Todos to display"
//         ) : (
//           todos.map((todo) => (
//             <TodoItem
//               todo={todo}
//               key={todo.sno}
//               onDelete={onDelete}
//               onUpdate={onUpdate}
//               onToggleComplete={onToggleComplete}
//             />

//           ))
//         )}
//       </div>
//     </>
//   );
// }

import React from 'react';
import TodoItem from "./TodoItem";

export default function Todos({ todos, onDelete, onUpdate, onToggleComplete }) {
  let mystyle = {
    minHeight: "70vh",
    margin: "10px auto"
  };

  return (
    <>
      <div className="container my-3" style={mystyle}>
        <h3 className='my-5'>Todos List</h3>

        {todos.length === 0 ? (
          "No Todos to display"
        ) : (
          todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.sno}
              onDelete={onDelete}
              onUpdate={onUpdate}
              onToggleComplete={onToggleComplete}
            />
          ))
        )}
      </div>
    </>
  );
}
