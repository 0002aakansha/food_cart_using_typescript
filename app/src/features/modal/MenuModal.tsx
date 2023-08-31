import { Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { cartObject } from "../../types/types";
import ModalItem from "./ModalItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { setOpen } from "../../Store/cartReducer";

interface itemProps {
    items: cartObject[];
    subTotal: number
}

export default function MenuModal(props: itemProps) {

    const dispatch = useDispatch()
    const isOpen = useSelector<RootState>(state => state.cart.open) as boolean
    const onClose = () => dispatch(setOpen())

    return (
        <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} size='3xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Heading as='h6' size={'md'} className="bg-yellow-500 text-center text-zinc-100 p-2 w-80 mx-auto rounded-sm">Your Cart</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {props.items.length ? (
                        <table className="text-sm table-fixed w-full border border-zinc-300 mx-auto">
                            <thead>
                                <tr>
                                    <th className="border border-zinc-300" colSpan={2}>Food Item</th>
                                    <th className="border border-zinc-300">Unit Price</th>
                                    <th className="border border-zinc-300">Qty</th>
                                    <th className="border border-zinc-300">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.items.map(item => <ModalItem key={item.id} id={item.id} name={item.name} src={item.imageUrl} price={item.unitPrice} quantity={item.quantity} totalPrice={item.totalPrice} />)
                                }

                                <tr className="border border-zinc-300 text-center">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="border border-zinc-300 text-center p-2">SubTotal:</td>
                                    <td className="border border-zinc-300 text-center font-semibold text-lg">{props.subTotal}$</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <>
                            <Heading as='h5' size={'md'} className="text-stone-800 text-center">Empty Cart</Heading>
                            <Text className="text-center my-1 text-stone-500">Start Shopping</Text>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}
