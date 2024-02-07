import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container } from "./style";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
    inputSearch: string,
}

export function Header() {
    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    navigate(`/search?q=${data.inputSearch}`);
    reset();
  };

  return (
    <Container>
      <Link to={"/"}>
        <img src={pokemonLogo} alt="Logo Pokemon" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="inputSearch"></label>

          <input
            type="text"
            id="inputSearch"
            placeholder="Buscar Pokemon"
            {...register("inputSearch", {
              required: "Digite o nome do Pokemon",
            })}
            
          />

          <span className="inputError">{errors.inputSearch?.message}</span>

        </section>

        <button type="submit">Buscar</button>
      </form>
    </Container>
  );
}
