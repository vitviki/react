import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[60px] lg:max-w-lg font-palanquin font-bold flex flex-col">
        Sign up for <span className="text-coral-red">Updates & Newsletter</span>
      </h3>

      <div className="xl:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-lg">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input text-gray-900"
        />
        <Button
          label={"Sign Up"}
          className="flex max-sm:justify-end items-center max-sm:w-full"
        />
      </div>
    </div>
  );
};

export default Subscribe;
