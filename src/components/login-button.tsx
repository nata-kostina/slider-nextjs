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
            <Text
                variant="small"
                className="duration-200 group-hover:text-primary"
            >
                Вход
            </Text>
        </Button>
    );
}
