import symbolServices from "../services/symbolService.js"

class SymbolController {

  async createSymbol(req, res) {
    const { symbolName, date, price, pmax, pmin } = req.body;

    try {
      const newSymbol = await symbolServices.insertSymbol(symbolName, date, price, pmax, pmin);
      res.status(201).json(newSymbol);

    } catch (error) {
      
      res.status(401).json({ message: error.message });
    }
  }

  async getAllSymbol(req,res){
    try {
      const allSymbol = await symbolServices.getSymbol();
      
      if(allSymbol.length == 0){
        res.status(200).json({message : "نمادی یافت نشد"});
      }
      res.status(200).json(allSymbol);
    } catch (error) {
      console.log(error);
    }
  }

  async FindSymbol(req, res) {
    const symbol = await symbolServices.findSymbol(req.params.id);
    if (symbol.length == 0) {
      return res.status(200).json({ message: 'چنین نمادی یافت نشد' });
    }
    return res.status(200).json(user);
  }

  async EditSymbol(req, res) {
    const { symbolName, date, price, pmax, pmin } = req.body;

    try {
      const editSymbol = await symbolServices.UpdateSymbol(req.params.id, symbolName, date, price, pmax, pmin);
      res.status(201).json(editSymbol);
    } catch (error) {
      console.log(error);
    }

  }


  async DeleteSymbol(req, res){
    try {
      const deleteSymbol = await symbolServices.DeleteSymbol(req.params.id);
      if (deleteSymbol == null){
        res.status(404).json({message : 'چنین نمادی پیدا نشد'});
      }
      res.status(200).json({message : 'با موفقیت حذف شد'})
    } catch (error) {
      console.log(error);
      res.status(404).json({message : error.message});
    }
  }
}


export default SymbolController;