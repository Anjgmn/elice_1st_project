import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Repositories, RepositoryNames } from '../repository/index';

export function AdminProduct() {
  const productRepository = Repositories[RepositoryNames.PRODUCT];
  const categoryRepository = Repositories[RepositoryNames.CATEGORY];

  const [AdminProdName, setAdminProdName] = useState('');
  const [AdminProdCategoryId, setAdminProdCategoryId] = useState('');
  const [AdminProdPrice, setAdminProdPrice] = useState('');
  const [AdminProdDescription, setAdminProdDescription] = useState('');
  const [AdminProdDetailDescription, setAdminProdDetailDescription] =
    useState('');
  const [AdminProdAuthor, setAdminProdAuthor] = useState('');
  const [AdminProdImageUrl, setAdminProdImageUrl] = useState('');

  const [category, setCategory] = useState([]);

  const handleAdminProdName = (e) => {
    setAdminProdName(e.target.value);
  };
  const handleAdminProdCategoryId = (e) => {
    setAdminProdCategoryId(e.target.value);
  };
  const handleAdminProdPrice = (e) => {
    setAdminProdPrice(e.target.value);
  };
  const handleAdminProdDescription = (e) => {
    setAdminProdDescription(e.target.value);
  };
  const handleAdminProdDetailDescription = (e) => {
    setAdminProdDetailDescription(e.target.value);
  };
  const handleAdminProdAuthor = (e) => {
    setAdminProdAuthor(e.target.value);
  };

  const handleAdminProdImageUrl = (e) => {
    setAdminProdImageUrl(e.target.value);
  };

  const AdminCatId = useRef();
  const AdminDescrip = useRef();
  const AdminCatName = useRef();
  const AdminCatProd = useRef();

  const AdminProdClick = () => {
    productRepository
      .createProduct({
        name: AdminProdName,
        price: AdminProdPrice,
        description: AdminProdDescription,
        detailDescription: AdminProdDetailDescription,
        author: AdminProdAuthor,
        imageUrl: AdminProdImageUrl,
        category: AdminProdCategoryId,
      })
      .then((data) => {
        if (data !== undefined) {
          alert('상품이 등록되었습니다.');
          localStorage.setItem('userId', data.id);
        } else {
          alert('뭐가 이상함');
        }
      })
      .catch();

    categoryRepository
      .getAllCategories({
        id: AdminCatId,
        name: AdminDescrip,
        productCount: AdminCatName,
        description: AdminCatProd,
      })
      .then((data) => console.log('카테고리 조회 : ', data))
      .catch();

    // useEffect(() => {
    //   categoryRepository
    //     .getAllCategories()
    //     .then((res) => {
    //       // console.log(res);
    //       setCategory(res);
    //     })
    //     .catch();
    // }, []);
  };

  const inputRef = useRef();

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files[0]?.name);
    // console.log('test');
  }, []);

  return (
    <div className="main-noSide">
      <Form method="post">
        <p className="AdminProdTitle">상품 등록</p>
        <Div onChange={handleAdminProdName}>
          <input
            type="text"
            className="pdInput pd-name"
            placeholder="이름을 설정해주세요."
          />
        </Div>
        <Div>
          {/* <p className="pdInfo pd-category">카테고리 설정</p> */}
          <Select
            name="setCategory"
            className="pd-category"
            onChange={handleAdminProdCategoryId}
            category={category}
            setCategory={setCategory}
          >
            <option ref={categoryRepository}>
              카테고리를 설정하세요(필수)
            </option>
            <option ref={categoryRepository} className="options">
              Employee
            </option>
            <option ref={categoryRepository} className="options">
              DevOps
            </option>
          </Select>
        </Div>
        <Div onChange={handleAdminProdPrice}>
          <input
            type="number"
            className="pdInput pd-price"
            placeholder="가격을 설정해주세요."
          />
        </Div>
        <Div onChange={handleAdminProdDescription}>
          <input
            type="text"
            className="pdInput pd-desc"
            placeholder="제품 설명을 적어주세요."
            onChange={handleAdminProdDetailDescription}
          />
        </Div>
        <Div onChange={handleAdminProdAuthor}>
          <input
            type="text"
            className="pdInput  pd-manu"
            placeholder="제조사를 작성해주세요."
          />
        </Div>
        <Div onChange={handleAdminProdImageUrl}>
          <input
            className="pdInput pd-image"
            placeholder="이미지를 등록해주세요."
            ref={inputRef}
            onChange={onUploadImage}
            type="file"
            accept="image/*"
          />
          {/* <button label="이미지 업로드" onClick={onUploadImageButtonClick}></button> */}
        </Div>
        <Button type="submit" value="추가하기" onClick={AdminProdClick}>
          등록하기
        </Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  .AdminProdTitle {
    font-size: 30px;
    font-weight: 600;
    margin: 20px auto;
    letter-spacing: 2px;
  }
`;

const Div = styled.div`
  width: 500px;
  // border: solid 1px red;
  display: flex;
  flex-direction: column;
  margin: 20px auto auto auto;

  .pdInput {
    width: 500px;
    height: 50px;
    border-radius: 4px;
    border: none;
    box-shadow: 2px 2px 8px lightgray;
    padding: 15px;
  }

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid skyblue;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Select = styled.select`
  width: 500px;
  height: 50px;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 8px lightgray;
  padding: 15px;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid skyblue;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  width: 400px;
  height: 40px;
  background: deepskyblue;
  border: 1px;
  border-radius: 8px;
  margin: 50px auto auto auto;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: $oc-teal-7;
    border: 2px solid red;
  }
`;
