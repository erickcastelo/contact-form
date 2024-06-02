import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {} from "react";
import "./Home.scss";
import { useForm } from "react-hook-form";
import { Input } from "../components/common/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea } from "../components/common/Textarea/Textarea";
import { RadioBox } from "../components/RadioBox/RadioBox";
import { Checkbox } from "../components/common/Checkbox/Checkbox";
import { contactSchema } from "./ContactShema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type Contact = Record<
  "firstName" | "lastName" | "email" | "message" | "queryType",
  string
> & { isConsent: boolean };

export const Home = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      isConsent: false,
    },
    resolver: yupResolver(contactSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: Contact) => {
    toast.success(
      <div>
        <p>Message Sent!</p> {"\n"}
        <small>Thanks for completing the form. We'll be in touch soon!</small>
      </div>,
      { toastId: "toastId" }
    );
    console.log("data", data);
  };

  return (
    <div className="home-content">
      <Card className="card-contact flex">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h1 className="mt-6 ml-6">Contact Us</h1>
          <CardBody className="card-body flex flex-col gap-0 lg:gap-4">
            <div className="form-group lg:flex">
              <div className="lg:w-full lg:pr-4">
                <Input
                  useForm={form}
                  name="firstName"
                  title="First Name"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="mt-4 lg:m-0 lg:w-full">
                <Input
                  useForm={form}
                  name="lastName"
                  placeholder="Last Name"
                  title="Last Name"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="mt-4 lg:m-0">
              <Input
                useForm={form}
                type="text"
                name="email"
                title="Email Address"
                placeholder="name@mail.com"
                required
              />
            </div>
            <div className="mt-4 lg:mt-0">
              <Typography variant="h6" color="blue-gray">
                Query Type
                <span className="text-green-default inline-block ml-2">*</span>
              </Typography>

              <div className="form-group-radio h-32 lg:h-16">
                <div className="flex flex-col lg:flex-row gap-4">
                  <RadioBox
                    useForm={form}
                    name="queryType"
                    label="General Enquiry"
                    value="general"
                    ripple={true}
                  />
                  <RadioBox
                    useForm={form}
                    name="queryType"
                    label="Support Request"
                    value="support"
                    ripple={false}
                  />
                </div>
                {errors.queryType && (
                  <small className="text-red-500">
                    {errors.queryType.message}
                  </small>
                )}
              </div>
            </div>
          </CardBody>
          <CardFooter className="card-footer pt-0">
            <Textarea
              size="lg"
              name="message"
              useForm={form}
              title="Message"
              className="focus:border-green-default focus:border-t-green-default"
              required
            />
            <div className="checkbox-home mt-6">
              <Checkbox
                useForm={form}
                name="isConsent"
                label="I consent to being contacted by the team"
                required
              />
            </div>

            <Button type="submit" className="button-submit w-full mt-4">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};
