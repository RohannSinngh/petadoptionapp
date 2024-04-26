import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { adopt } from "../redux/adoption/action";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email("Please enter a valid email"),
    address: yup.string().required(),
    phone: yup
      .string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required(),
    aadharNumber: yup
      .string()
      .matches(/^[0-9]{16}$/, "Aadhar number must be 16 digits")
      .required(),
  })
  .required();

const AdoptionForm = ({ closeModal, pet, user }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      aadharNumber: "",
      address: "",
      user: user,
      pet: pet,
      status: "Not Approved",
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // createAAdoption({ dispatch, payload: data });
    dispatch(adopt({ payload: data }));
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={errors.firstName}
              id="firstName"
              label="First Name"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={errors.lastName}
              id="lastName"
              label="Last Name"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={errors.email}
              id="email"
              label="Email"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Phone Number
        </InputLabel>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={errors.phone}
              id="phone"
              label="Phone Number"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="aadharNumber">Aadhar Number</InputLabel>
        <Controller
          name="aadharNumber"
          control={control}
          render={({ field }) => (
            <OutlinedInput
              error={errors.aadharNumber}
              id="aadharNumber"
              label="Aadhar Number"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="address">Address</InputLabel>
        <Controller
          name="address"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={errors.address}
              id="address"
              label="Address"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Button variant="contained" color="success" type="submit">
          Adopt
        </Button>
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Button variant="contained" color="warning" onClick={closeModal}>
          Cancel
        </Button>
      </FormControl>
    </form>
  );
};

export default AdoptionForm;
