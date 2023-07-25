import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new error("Cant load cabins");
  }
  return data;
};

export const createCabin = async(cabin,id) => {
  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl)
  const imageName = `${Math.floor(Math.random() * 100)}-${cabin.image.name}`.replaceAll("/","");
  const imagePath = hasImagePath ? cabin.image :`${supabaseUrl}/storage/v1/object/public/cabins-img/${imageName}`

  let query = supabase.from('cabins')
  if (!id) {
    query = query.insert([{ ...cabin, image: imagePath }]);}

  // B) EDIT
  if (id) {
    query = query.update({ ...cabin, image: imagePath }).eq("id", id);
  }
  
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }


const { error:storageError } = await supabase
  .storage
  .from('cabins-img')
  .upload(imageName, cabin.image)



  if (storageError) {
     await supabase
    .from('cabins')
    .delete()
    .eq('id', data.id)
    console.log(storageError)
      throw new error("Cant add cabin");
    
  }
  return data
}


export const deleteCabin = async (id) => {
  const { error } = await supabase
.from('cabins')
.delete()
.eq('id', id)
if (error) {
  throw new error("Cant delete cabin");
}
}