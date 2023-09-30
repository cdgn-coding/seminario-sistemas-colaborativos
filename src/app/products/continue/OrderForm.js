import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod";


const FullNameInput = ({field}) => (
    <FormItem>
        <FormLabel>Nombre completo</FormLabel>
        <FormControl>
            <Input placeholder="Pepe Gonzalez" {...field} />
        </FormControl>
        <FormMessage/>
    </FormItem>
)

const ShippingAddressInput = ({field}) => (
    <FormItem>
        <FormLabel>Dirección</FormLabel>
        <FormControl>
            <Input placeholder="Calle Falsa 123" {...field} />
        </FormControl>
        <FormMessage/>
    </FormItem>
)

const ZIPCodeInput = ({field}) => (
    <FormItem>
        <FormLabel>Número Telefónico</FormLabel>
        <FormControl>
            <Input placeholder="343 4667635" {...field} />
        </FormControl>
        <FormMessage/>
    </FormItem>
)

const formSchema = z.object({
    fullname: z.string().nonempty({message: "El nombre es requerido"}),
    address: z.string().nonempty({message: "La dirección es requerida"}),
    zipCode: z.string().nonempty({message: "El número telefónico es requerido"}),
})

export default function OrderForm({ onSubmit }) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            address: "",
            zipCode: "",
        }
    })

    return (
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField control={form.control} name="fullname" render={FullNameInput}/>
                    <FormField control={form.control} name="address" render={ShippingAddressInput}/>
                    <FormField control={form.control} name="zipCode" render={ZIPCodeInput}/>
                    <Button type="submit" class= "bg-amber-950">Finalizar</Button>
                </form>
            </Form>
        </section>
    )
}