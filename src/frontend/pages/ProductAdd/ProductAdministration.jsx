import React, { useRef, useState } from "react";
import * as S from "./ProductAdministrationStyle";
import ReturnArrow from "../../components/returnArrow/ReturnArrow";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../backend/firebaseConfig";

import UseProducts from "../../../backend/hooks/UseProducts";

const ProductAdd = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const { products, loading } = UseProducts();

  const fileInputRef = useRef(null);
  const handleAddFile = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const checkProductNameUnique = async (productName) => {
    const productsRef = collection(db, "products");
    const querySnapshot = await getDocs(
      query(productsRef, where("name", "==", productName))
    );
    return querySnapshot.empty;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    const isUnique = await checkProductNameUnique(name);
    if (!isUnique) {
      alert(
        "Já existe um produto com este nome, exclua-o ou dê um nome diferente à esse produto"
      );
      setUploading(false);
      return;
    }

    const fileRef = storageRef(getStorage(), `imagens/${image.name}`);
    const docRef = doc(db, "products", name);

    uploadBytes(fileRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setDoc(docRef, {
            name,
            description,
            price: parseFloat(price),
            imageURL: url,
          })
            .then(() => {
              setUploading(false);
              setName("");
              setDescription("");
              setPrice("");
              setImage(null);
              setPreviewUrl("");
              alert("Novo produto adicionado.");
              window.location.reload();
            })
            .catch((error) => {
              console.error("Erro ao salvar os dados do produto:", error);
              setUploading(false);
            });
        });
      })
      .catch((error) => {
        console.error("Erro ao fazer upload da imagem:", error);
        setUploading(false);
      });
  };

  const handleDelete = async (productName) => {
    if (
      window.confirm(
        `Tem certeza de que deseja excluir o produto: ${productName}?`
      )
    ) {
      const docRef = doc(db, "products", productName);
      deleteDoc(docRef)
        .then(() => {
          alert("Produto excluído com sucesso.");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Erro ao excluir o produto:", error);
        });
    }
  };

  if (loading) {
    return <div style={{ color: "#fdfdfd" }}>Carregando produtos...</div>;
  }

  return (
    <div>
      <ReturnArrow />
      <S.Container>
        <S.ProductAddBox onSubmit={handleSubmit}>
          <S.Input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do Produto"
            required
            value={name}
          />
          <S.Textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição do Produto"
            required
            value={description}
          />
          <S.Input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Preço"
            required
            value={price}
          />
          <S.Input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
            required
          />
          <S.AddFileButton onClick={handleAddFile}>
            Adicionar imagem
          </S.AddFileButton>
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Pré-visualização"
              style={{
                width: "40px",
                height: "auto",
                marginInline: "auto",
                marginBottom: "10px",
              }}
            />
          )}
          <S.AddProductButton type="submit" disabled={uploading}>
            {uploading ? "Enviando..." : "Adicionar Produto"}
          </S.AddProductButton>
        </S.ProductAddBox>
      </S.Container>
      <S.ProductsBox>
        {products.map((product) => (
          <S.ProductBox key={product.id}>
            <img src={product.imageURL} />
            <p style={{ color: "#fdfdfd", fontWeight: "bolder" }}>
              {product.name}
            </p>
            <p style={{ color: "#fdfdfd" }}>{product.description}</p>
            <p style={{ color: "#fdfdfd" }}>R${product.price}</p>
            <button onClick={() => handleDelete(product.name)}>
              Excluir Produto
            </button>
          </S.ProductBox>
        ))}
      </S.ProductsBox>
    </div>
  );
};

export default ProductAdd;
