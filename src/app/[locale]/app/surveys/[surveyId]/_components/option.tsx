import { useFormContext, useWatch } from "react-hook-form";

export function Option({ children }: any) {
  const { control } = useFormContext();
  const bgColor = useWatch({ control, name: "buttonBackgroundColor" });
  const buttonStyle = useWatch({ control, name: "buttonStyle" });
  const buttonShape = useWatch({ control, name: "buttonShape" });

  return (
    <button
      type="button"
      className={`text-black w-10 h-10 border-2 ${buttonShape}`}
      style={{
        backgroundColor: buttonStyle === "filled" ? bgColor : "white",
        borderColor: bgColor,
        color: buttonStyle === "filled" ? "white" : bgColor,
      }}
    >
      {children}
    </button>
  );
}
