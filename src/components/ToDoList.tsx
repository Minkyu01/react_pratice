import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do ", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <h1>To dos</h1>
      <hr></hr>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do ",
          })}
          placeholder="Write a to do"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

// interface IForm {
//   email: string;
//   first: string;
//   last: string;
//   pw: string;
//   pw1: string;
//   extraerror: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onVaild = (data: IForm) => {
//     if (data.pw !== data.pw1) {
//       setError(
//         "pw1",
//         { message: "password are not the same" },
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraerror", { message: "Server offline" });
//   };
//   console.log(errors);
//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onVaild)}
//       >
//         <input
//           {...register("email", {
//             required: "Eamil Required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com/,
//               message: "only naver.com emails allowed",
//             },
//           })}
//           placeholder="email"
//         ></input>
//         <span>{errors.email?.message as string}</span>
//         <input
//           {...register("first", {
//             required: "write here",
//             validate: {
//               noNico: (value) =>
//                 value.includes("nico") ? "no nicos allowed" : true,
//               noNick: (value) =>
//                 value.includes("nick") ? "no nick allowed" : true,
//             },
//           })}
//           placeholder="first"
//         ></input>
//         <span>{errors.first?.message as string}</span>
//         <input
//           {...register("last", { required: true })}
//           placeholder="last"
//         ></input>
//         <input
//           {...register("pw", {
//             required: "password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short",
//             },
//           })}
//           placeholder="pw"
//         ></input>
//         <span>{errors.pw?.message as string}</span>
//         <input
//           {...register("pw1", {
//             required: "password is requried",
//             minLength: {
//               value: 5,
//               message: "Your password is too short",
//             },
//           })}
//           placeholder="pw1"
//         ></input>
//         <span>{errors.pw1?.message as string}</span>
//         <button>Add</button>
//         <span>{errors?.extraerror?.message}</span>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
