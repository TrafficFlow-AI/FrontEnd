import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Carta para Flask
export const FlaskCard: React.FC = () => {
  return (
    <Card className="border-none rounded-lg p-4 hover:bg-secondary">
      <CardHeader className="flex items-center space-x-2">
        <img
          src="https://d3oofn3y8h5efg.cloudfront.net/assets/images/flask_logo_icon.svg?w=750&q=75"
          alt="Flask Icon"
          className="w-6 h-6"
        />
        <CardTitle className="text-lg font-semibold">Flask</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          Flask es un microframework de Python para desarrollo web.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <a
          href="https://flask.palletsprojects.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Más información
        </a>
      </CardFooter>
    </Card>
  );
};

// Carta para Ultralytics
export const UltralyticsCard: React.FC = () => {
  return (
    <Card className="border-none rounded-lg p-4 hover:bg-secondary">
      <CardHeader className="flex items-center space-x-2">
        <img
          src="https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64994922cf2a6385a4bf4489_UltralyticsYOLO_mark_blue.svg"
          alt="Ultralytics Icon"
          className="w-6 h-6"
        />
        <CardTitle className="text-lg font-semibold">Ultralytics</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          Ultralytics es una biblioteca para la implementación de modelos de
          visión por computadora.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <a
          href="https://www.ultralytics.com/es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Más información
        </a>
      </CardFooter>
    </Card>
  );
};

// Carta para Next.js
export const NextjsCard: React.FC = () => {
  return (
    <Card className="border-none rounded-lg p-4 hover:bg-secondary">
      <CardHeader className="flex items-center space-x-2">
        <img src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="Next.js Icon" className="w-6 h-6" />
        <CardTitle className="text-lg font-semibold">Next.js</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          Next.js es un framework de React para aplicaciones web y estáticas.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Más información
        </a>
      </CardFooter>
    </Card>
  );
};

interface TFCardProps {
  count: number;
}

export const TFCard: React.FC<TFCardProps> = ({
  count,
}) => {
  return (
    <Card className="border-none rounded-lg p-4 hover:bg-secondary">
      <CardHeader className="flex items-center space-x-2">
        <CardTitle className="text-lg font-semibold">Gran Via - KM 5</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          Number of cars: {count}
        </CardDescription>
      </CardContent>
      <CardFooter className="">
        <a
          href="https://maps.app.goo.gl/xMchrSm8RqUadMVU6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View in Maps
        </a>
      </CardFooter>
    </Card>
  );
};;