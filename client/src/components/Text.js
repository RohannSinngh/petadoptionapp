import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/auth/action";
import { fetchAllCategories } from "../redux/categories/action";
import { fetchAllPets } from "../redux/pets/action";
import { fetchAllAdoptions } from "../redux/adoption/action";
import { approveAdoption } from "../services/adoptions";

const Test = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const { categories } = useSelector((store) => store);
  const { pets } = useSelector((store) => store);
  const { adoption } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchAllCategories());
    dispatch(fetchAllPets());
    dispatch(fetchAllAdoptions());
    // dispatch(
    //   approveAdoption({ id: "662aeafd936211cb0f9c79d0", status: "Approved" })
    // );
  }, []);

  const getData = () => {
    console.log("auth", auth);
    console.log("categories ", categories);
    console.log("all pets ", pets);
    console.log("all adoptions", adoption.alladoption);
    console.log("updated adoption", adoption.updatedAdoption);
  };
  return (
    <>
      <h1>Test</h1>
      <button onClick={() => getData()}>test</button>
    </>
  );
};

export default Test;
