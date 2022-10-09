interface TextInputProps {
    label: string;
    name: string;
    id: string;
    type: string;
}

const TextInput = (props: TextInputProps) => {
    return (
        <div className="mb-6">
            <label className="mb-3 text-white font-ben font-bold text-sm block">{props.label}</label>
            <input type={props.type} name={props.name} id={props.id} className="bg-white/5 rounded-md w-full h-11 text-white border-box px-4 font-ben font-medium" />
        </div>
    );
}

export default TextInput;