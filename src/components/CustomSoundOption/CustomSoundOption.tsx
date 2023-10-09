import { OptionProps } from "react-select";
import "./CustomSoundOption.scss";
import classNames from "classnames";
import { ISoundOptions } from "@/types/types";

export const CustomSoundOption: React.FC<OptionProps<ISoundOptions>> = ({
  innerRef,
  isDisabled,
  isFocused,
  isSelected,
  className,
  innerProps,
  children,
  data,
}) => {
  return (
    <div
      ref={innerRef}
      className={classNames(
        {
          option: true,
          disabled: isDisabled,
          focused: isFocused,
          selected: isSelected,
        },
        className,
        "option-container"
      )}
      {...innerProps}
    >
      {children}
      {data.value && (
        <button
          className="play-sound-button"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            const audio = new Audio(data.value ?? "");
            audio.play();
          }}
        />
      )}
    </div>
  );
};
