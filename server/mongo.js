import mongoose from "mongoose";

const Connection = async () => {
  const mongoUrl =
    "mongodb+srv://prathamvaishya:pratham2712@todo.fggkco1.mongodb.net/?retryWrites=true&w=majority";
  await mongoose
    .connect(mongoUrl, { useNewUrlParser: true })
    .then(() => {
      console.log("sucessful");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default Connection;
