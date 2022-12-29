import express, { Request, Response, response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
var router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { page, perPage, orderBy, ascend, filters } = req.body;

  const takeNum = parseInt((perPage ?? "500") as string);
  const skipNum = (parseInt((page ?? "1") as string) - 1) *
    takeNum;

  var orderByParams = {};

  const filtersValue = filters as any[];

  const orderByVal = orderBy ?? "id";
  const ascendVal = (ascend ?? true) == true;

  switch (orderByVal) {
    case "id":
      orderByParams = {
        id: ascendVal ? "asc" : "desc",
      };
      break;
    case "marca":
      orderByParams = {
        marca: ascendVal ? "asc" : "desc",
      };
      break;
    case "codice":
      orderByParams = {
        codice: ascendVal ? "asc" : "desc",
      };
      break;
    case "prezzo":
      orderByParams = {
        prezzo: ascendVal ? "asc" : "desc",
      };
      break;
    case "disponibile":
      orderByParams = {
        disponibile: ascendVal ? "asc" : "desc",
      };
      break;
    case "ean":
      orderByParams = {
        ean: ascendVal ? "asc" : "desc",
      };
      break;
    case "nome":
      orderByParams = {
        nome: ascendVal ? "asc" : "desc",
      };
      break;
  }

  var whereParams: Prisma.productWhereInput = {};

  filtersValue.forEach((filter) => {
    switch (filter.type) {
      case "marca":
        whereParams.marca = {
          in: filter.values,
        };
        break;
      case "disponibile":
        whereParams.disponibile = filter.value === "true";
        break;
      case "prezzo":
        whereParams.prezzo = {
          gte: parseFloat(filter.min),
          lte: parseFloat(filter.max),
        };
        break;
    }
  });

  var conteggio = await prisma.product.count({
    where: whereParams,
  });

  res.json(
    {
      items: await prisma.product.findMany({
        take: takeNum,
        skip: skipNum,
        orderBy: orderByParams,
        where: whereParams,
      }),
      count: conteggio,
      page: page ?? 1,
      perPage: perPage ?? 50,
    },
  );
});

router.get("/marcaFilter", async (req: Request, res: Response) => {
  res.json(
    await prisma.product.groupBy({
      by: ["marca"],
    }),
  );
});

router.get("/marcaStats", async (req: Request, res: Response) => {
  res.json(
    await prisma.product.groupBy({
      by: ["marca"],
      _count: true,
    }),
  );
});

module.exports = router;
