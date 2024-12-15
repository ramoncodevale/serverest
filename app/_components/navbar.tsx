import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-between gap-4 rounded-none bg-violet-700 px-4">
      <div className="flex items-center gap-4">
        <Image src="/logo.svg" alt="Logo Svg" width={80} height={80} />
        <ul className="flex items-center gap-6">
          <li>
            <Link
              className="font-medium text-white hover:text-gray-400"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-white hover:text-gray-400"
              href="/"
            >
              Cadastrar Usuários
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-white hover:text-gray-400"
              href="/"
            >
              Listar Usuários
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-white hover:text-gray-400"
              href="/"
            >
              Cadastrar Produtos
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-white hover:text-gray-400"
              href="/"
            >
              Listar Produtos
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-white hover:text-gray-400"
              href="/"
            >
              Relatórios
            </Link>
          </li>
        </ul>
      </div>
      <Button
        className="w-50 roundend-md h-10 bg-green-400 font-bold text-white"
        variant="outline"
      >
        LOGOUT
      </Button>
    </div>
  );
};

export default NavBar;
