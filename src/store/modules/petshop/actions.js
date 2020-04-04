export function detailPetshopRequest() {
  return {
    type: '@petshop/DETAIL_PETSHOP_REQUEST',
    payload: '',
  };
}

export function detailPetshopSuccess(petshop) {
  return {
    type: '@petshop/DETAIL_PETSHOP_SUCCESS',
    payload: {petshop},
  };
}
