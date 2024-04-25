import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/auth/action";
import { fetchAllCategories } from "../redux/categories/action";
import { fetchAllPets } from "../redux/pets/action";

const Test = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const { categories } = useSelector((store) => store);
  const { pets } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchAllCategories());
    dispatch(fetchAllPets());
  }, []);

  const getData = () => {
    console.log("auth", auth);
    console.log("categories ", categories);
    console.log("all pets ", pets);
  };
  return (
    <>
      <h1>Test</h1>
      <button onClick={() => getData()}>test</button>
    </>
  );
};

export default Test;
