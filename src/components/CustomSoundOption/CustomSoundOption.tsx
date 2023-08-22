import { OptionProps } from "react-select";
import "./CustomSoundOption.scss";
import classNames from "classnames";

export const CustomSoundOption = (props: OptionProps) => {
  // TODO: Сюда как дженерик можно прокинуть тип чтоб пофикисить value
  return (
    <div
      ref={props.innerRef}
      className={classNames(
        {
          option: true,
          disabled: props.isDisabled,
          focused: props.isFocused,
          selected: props.isSelected,
        },
        props.className,
        "option-container"
      )}
      {...props.innerProps}
    >
      {props.children}
      <button
        className="play-sound-button"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          props.data?.value?.play();
        }}
      />
    </div>
  );
};
