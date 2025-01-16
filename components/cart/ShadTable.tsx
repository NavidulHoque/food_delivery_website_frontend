import { Food } from "@/lib/type";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
    TableCell
} from "@/components/ui/table"
import Image from 'next/image';
import Remove from './Remove';


export default function ShadTable({ cartFoodList, cart }: { cartFoodList: Food[], cart: { [key: string]: number } }) {

    return (
        <Table>

            <TableHeader>

                <TableRow>

                    <TableHead>Items</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Remove</TableHead>

                </TableRow>

            </TableHeader>

            <TableBody>

                {cartFoodList.map((food) => (

                    <TableRow key={food._id}>

                        <TableCell>

                            <Image 
                                src={food.image} 
                                alt={food.name} 
                                className='w-20 h-16'
                                width={200}
                                height={200} 
                            />

                        </TableCell>

                        <TableCell>{food.name}</TableCell>
                        <TableCell>${food.price}</TableCell>
                        <TableCell>{cart[food.name]}</TableCell>
                        <TableCell>${cart[food.name] * food.price}</TableCell>
                        <TableCell><Remove foodName={food.name} /></TableCell>

                    </TableRow>
                ))}

            </TableBody>

        </Table>
    )
}
