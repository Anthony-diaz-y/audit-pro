import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Cards = ({ imageUrl, description, category, title, aosType }) => {
  return (
    <div data-aos={aosType}>
      <Card className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-400 ease-in-out hover:scale-105 h-full">
        <CardHeader>
          <img
            src={imageUrl}
            alt={`Imagen del proyecto ${title}`}
            className="w-full h-48 object-cover rounded-2xl"
          />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-teal-700 font-semibold mb-1">{category}</p>
          <CardTitle className="text-xl font-bold text-gray-800 mb-3">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};
