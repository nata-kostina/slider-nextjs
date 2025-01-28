import Button from "@/ui/button";
import Text from "@/ui/text";

export default function LoginButton() {
    return (
        <Button
            type="button"
            icon="/images/enter.svg"
            alt="Вход"
            className="group"
        >
            <Text variant="small" className="group-hover:text-primary duration-200">Вход</Text>
        </Button>
    );
}
