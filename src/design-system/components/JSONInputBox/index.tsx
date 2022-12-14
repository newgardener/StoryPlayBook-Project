import * as React from "react";
import classNames from "classnames/bind";
import { debounce, omit } from "lodash-es";

import { ArrowToggleDown, Minus, Plus } from "../../assets/images";
import { FlexLayout } from "../Layout";
import { SvgIcon } from "../SvgIcon";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface JSONInputBoxProps {
  propsName?: string;
  defaultData: object | object[];
  className?: string;
}

export const JSONInputBox = ({ propsName = "data", defaultData }: JSONInputBoxProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [JSONInputData, setJSONInputData] = React.useState({});

  const keyCount = Object.keys(defaultData).length;

  React.useEffect(() => {
    setIsCollapsed(true);
    setJSONInputData(defaultData);
  }, [defaultData]);

  if (!Array.isArray(JSONInputData)) {
    return (
      <EditableJSONData
        keyData={propsName}
        valueData={defaultData}
        JSONInputData={JSONInputData}
        setJSONInputData={setJSONInputData}
      />
    );
  }

  const onClickPlusIcon = () => {
    setJSONInputData({
      ...JSONInputData,
      [Object.keys(JSONInputData).length]: {},
    });
  };

  const onClickMinusIcon = () => {
    setJSONInputData(omit(JSONInputData, Object.keys(JSONInputData).length - 1));
  };

  return (
    <div className={cx("json-input-box")}>
      <button
        className={cx("json-array-node")}
        onClick={() => setIsCollapsed((currentValue) => !currentValue)}
      >
        <SvgIcon
          className={cx({ "rotate-to-right": !isCollapsed })}
          icon={ArrowToggleDown}
          theme="gray"
          size={10}
        />
        <span className={cx("key-data")}>{propsName} :</span>
        <span className={cx("bracelet", { collapsed: isCollapsed })}>
          {isCollapsed ? "[" : `[...] ${keyCount} items`}
        </span>
        {isCollapsed ? (
          <SvgIcon
            icon={Plus}
            theme="gray"
            size={10}
            onClick={(e) => {
              e.stopPropagation();
              onClickPlusIcon();
            }}
          />
        ) : (
          <SvgIcon
            icon={Minus}
            theme="gray"
            size={10}
            onClick={(e) => {
              e.stopPropagation();
              onClickMinusIcon();
            }}
          />
        )}
      </button>
      {isCollapsed && (
        <>
          {Object.entries(JSONInputData).map(([key, value], i) => (
            <EditableJSONData
              key={i}
              keyData={key}
              valueData={value}
              JSONInputData={JSONInputData}
              setJSONInputData={setJSONInputData}
            />
          ))}
          <FlexLayout direction="row">
            <p className={cx("bracelet")}>{"]"}</p>
            <SvgIcon
              icon={Minus}
              theme="gray"
              size={10}
              onClick={(e) => {
                e.stopPropagation();
                onClickMinusIcon();
              }}
            />
          </FlexLayout>
        </>
      )}
    </div>
  );
};

type EditableJSONDataProps = {
  keyData: number | string;
  valueData: object;
  JSONInputData: object;
  setJSONInputData: React.Dispatch<
    React.SetStateAction<{
      [key: number]: object;
    }>
  >;
};

const EditableJSONData = ({
  keyData,
  valueData,
  JSONInputData,
  setJSONInputData,
}: EditableJSONDataProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isEditable, setIsEditable] = React.useState(false);

  const [JSONData, setJSONData] = React.useState(valueData);

  const inputKeyRef = React.useRef<HTMLInputElement>(null);
  const inputValueRef = React.useRef<HTMLInputElement>(null);

  const keyCount = Object.keys(valueData).length;

  const onClickPlusIcon = () => setIsEditable(true);

  const onClickEditCancelButton = () => setIsEditable(false);

  const onClickMinusIcon = () => {
    const reorderedJSONInputData = {} as { [key: number]: object };
    const updatedJSONInputData = omit(JSONInputData, keyData);
    Object.entries(updatedJSONInputData).forEach(
      ([_, value], index) => (reorderedJSONInputData[index] = value as object),
    );
    setJSONInputData(reorderedJSONInputData);
  };

  const updateJSONInputData = (updatedJSONData: object) => {
    setJSONData(updatedJSONData);
    setJSONInputData({
      ...JSONInputData,
      [keyData]: updatedJSONData,
    });
  };

  const onClickEditSaveButton = () => {
    const newKey = inputKeyRef.current && inputKeyRef.current.value;
    const newValue = inputValueRef.current && inputValueRef.current.value;
    if (newKey && newKey !== "") {
      const updatedJSONData = {
        ...JSONData,
        [newKey]: newValue,
      };
      updateJSONInputData(updatedJSONData);
      setIsEditable(false);
    }
  };

  const deleteTargetedJSONProperty = (propertyName: string) => {
    const updatedJSONData = omit(JSONData, propertyName);
    updateJSONInputData(updatedJSONData);
  };

  const updateTargetedJSONProperty = (propertyName: string, propertyValue: string) => {
    const updatedJSONData = {
      ...JSONData,
      [propertyName]: propertyValue,
    };
    updateJSONInputData(updatedJSONData);
  };

  React.useEffect(() => {
    setJSONData(valueData);

    return () => {
      setIsCollapsed(false);
      setIsEditable(false);
    };
  }, [valueData]);

  return (
    <React.Fragment>
      <button
        className={cx("json-data-node")}
        onClick={() => setIsCollapsed((currentValue) => !currentValue)}
      >
        <SvgIcon
          className={cx({ "rotate-to-right": !isCollapsed })}
          icon={ArrowToggleDown}
          theme="gray"
          size={10}
        />
        <span className={cx("key-data")}>{keyData} :</span>
        <span className={cx("bracelet", { collapsed: isCollapsed })}>
          {isCollapsed ? "{" : `{...} ${keyCount} keys`}
        </span>
        {isCollapsed ? (
          <SvgIcon
            icon={Plus}
            theme="gray"
            size={10}
            onClick={(e) => {
              e.stopPropagation();
              onClickPlusIcon();
            }}
          />
        ) : (
          <SvgIcon
            icon={Minus}
            theme="gray"
            size={10}
            onClick={(e) => {
              e.stopPropagation();
              onClickMinusIcon();
            }}
          />
        )}
      </button>
      {isCollapsed && (
        <>
          <ul className={cx("value-node-list")}>
            {Object.entries(JSONData).map(([key, value], i) => (
              <EditableJSONDataItem
                key={i}
                name={key}
                value={value}
                deleteTargetedJSONProperty={deleteTargetedJSONProperty}
                updateTargetedJSONProperty={updateTargetedJSONProperty}
              />
            ))}
            {isEditable && (
              <FlexLayout direction="row" alignItems="center">
                <input name="key" placeholder="Key" width={30} ref={inputKeyRef} />
                <input name="value" placeholder="Value" width={50} ref={inputValueRef} />
                <button name="save" onClick={onClickEditSaveButton}>
                  Save
                </button>
                <button name="cancel" onClick={onClickEditCancelButton}>
                  Cancel
                </button>
              </FlexLayout>
            )}
          </ul>
          <span className={cx("bracelet", "value")}>{"}"}</span>
          <SvgIcon
            icon={Minus}
            theme="gray"
            size={10}
            onClick={(e) => {
              e.stopPropagation();
              onClickMinusIcon();
            }}
          />
        </>
      )}
    </React.Fragment>
  );
};

type EditableJSONDataItemProps = {
  name: string;
  value: string;
  deleteTargetedJSONProperty: (propertyName: string) => void;
  updateTargetedJSONProperty: (propertyName: string, propertyValue: string) => void;
};

const EditableJSONDataItem = ({
  name,
  value,
  deleteTargetedJSONProperty,
  updateTargetedJSONProperty,
}: EditableJSONDataItemProps) => {
  const [isEditable, setIsEditable] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickValueBox = () => {
    setIsEditable(true);
  };

  const onBlurValueBox = () => {
    setIsEditable(false);
  };

  const onChangeJSONData = debounce((e) => {
    e.stopPropagation();
    updateTargetedJSONProperty(name, e.target.value);
  });

  React.useEffect(() => {
    if (isEditable) {
      inputRef.current && inputRef.current.focus();
    }
  }, [isEditable, inputRef.current]);

  return (
    <li className={cx("value-node")}>
      <span className={cx("name")}>{name}: </span>
      {!isEditable ? (
        <button className={cx("value")} onClick={onClickValueBox}>
          {value}
        </button>
      ) : (
        <input
          ref={inputRef}
          placeholder={value}
          onBlur={onBlurValueBox}
          onChange={onChangeJSONData}
        />
      )}
      <SvgIcon
        className={cx("plus-icon")}
        icon={Minus}
        theme="gray"
        size={10}
        onClick={() => deleteTargetedJSONProperty(name)}
      />
    </li>
  );
};
