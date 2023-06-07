import { FormProvider, useFormContext } from "react-hook-form";
import FormParts from "./FormParts";

/**
 * インプットフォームを構築する汎用コンポーネント
 * @param {*} param0 
 * @returns 
 */
export default function FormInputText({ required = false, labelName, formName }) {

    // FormProviderタグで囲まれると、useFormの機能をまとめて渡してuseFormContextで使う事ができる
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useFormContext();

    return (
        <FormParts required={required} labelName={labelName}>
            <input
                id={formName}
                type="text"
                // isError={!!formState.errors.raceName} // エラー時にborderの色を変更するためのprops
                {...register('raceName', {
                    required: '必須項目'
                })}
            />
        </FormParts>

    );
}