import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";


export default function User() {
    const user = useSelector<RootState>(state => state.user.name) as string

    return (
        <div>
            <Text className="text-zinc-100 font-semibold text-lg capitalize">{ user }</Text>
        </div>
    )
}
