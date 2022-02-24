#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["ListaVeiculos.Api/ListaVeiculos.Api.csproj", "ListaVeiculos.Api/"]
RUN dotnet restore "ListaVeiculos.Api/ListaVeiculos.Api.csproj"
COPY . .
WORKDIR "/src/ListaVeiculos.Api"
RUN dotnet build "ListaVeiculos.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ListaVeiculos.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ListaVeiculos.Api.dll"]
