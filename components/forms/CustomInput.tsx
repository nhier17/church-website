import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Control } from 'react-hook-form';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    SELECT = 'select'
}

interface CustomInputProps {
    control: Control<any>;
    name: string;
    fieldType: FormFieldType;
    label?: string;
    placeholder?: string;
    children?: React.ReactNode;
    rows?: number;
}

const RenderField = ({ field, props }: { field: any; props: CustomInputProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <FormControl>
                    <Input 
                    {...field} 
                    placeholder={props.placeholder} 
                    className="field-input"
                    />
                </FormControl>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea 
                    {...field} 
                    placeholder={props.placeholder} 
                    className="field-textarea"
                    rows={props.rows}
                    />
                </FormControl>
            );
        case FormFieldType.SELECT:
            return (
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="shad-select-trigger w-full">
                      <SelectValue placeholder={props.placeholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="shad-select-content">
                    {props.children}
                  </SelectContent>
                </Select>
              </FormControl>
            );
        default:
            return null;
    }
}

export function CustomInput(props: CustomInputProps) {
    const { control, name, label } = props;
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                {label && <FormLabel className="field-label">{label}</FormLabel>}
                <RenderField field={field} props={props} />
                <FormMessage className="text-red-500" />
            </FormItem>
            )}
        />
    )
}