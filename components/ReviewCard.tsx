import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface reviewProps {
    name: string;
    review: string;
    title: string
}

export default function ReviewCard({name, review, title} : reviewProps) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{name}</CardDescription>
        </CardHeader>
        <CardContent>
            <div>
                <p>{review}</p>
            </div>
        </CardContent>
    </Card>
  )
}
