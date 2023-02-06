import React from 'react';

const ProductDescription = ({ product }) => {
	return (
		<div className="product_view_tabs mt-4">
			<div className="pv_tab_buttons">
				<div className="pbt_single_btn active" data-target=".info">
					Product Info
				</div>
				<div className="pbt_single_btn" data-target=".qna">
					Question &amp; Answer
				</div>
				<div className="pbt_single_btn" data-target=".review">
					Review (10)
				</div>
			</div>
			<div className="pb_tab_content info active">
				<div className="row">
					<div className="col-lg-8">
						<div className="pbt_info_text">
							<p>{product?.description}</p>
						</div>
						<div className="pbt_info_table">
							<div className="pbtit_single">
								<p className="specs">Color</p>
								<p className="spec_text">{product?.color}</p>
							</div>
							<div className="pbtit_single">
								<p className="specs">Material</p>
								<p className="spec_text">{product?.material}</p>
							</div>
							<div className="pbtit_single">
								<p className="specs">Weight</p>
								<p className="spec_text">{product?.weight}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="pb_tab_content review info active">
				<div className="review_rating">
					<div className="total_rating">
						<div className="trating_number">
							<span className="avrage">4.9</span>
							<span className="from">/5</span>
						</div>
						<div className="rating_star">
							<span>
								<i className="las la-star"></i>
							</span>
							<span>
								<i className="las la-star"></i>
							</span>
							<span>
								<i className="las la-star"></i>
							</span>
							<span>
								<i className="las la-star"></i>
							</span>
							<span>
								<i className="las la-star"></i>
							</span>
						</div>
						<div className="trating_count">20 Ratings</div>
					</div>
					<div className="overall_rating">
						<div className="single_ovrating d-flex align-items-center">
							<div className="rating_star">
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
							</div>
							<div className="rating_pbox">
								<span style={{ width: '70%' }}></span>
							</div>
							<p className="rating_count">18</p>
						</div>
						<div className="single_ovrating d-flex align-items-center">
							<div className="rating_star">
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
							</div>
							<div className="rating_pbox">
								<span style={{ width: '20%' }}></span>
							</div>
							<p className="rating_count">2</p>
						</div>
						<div className="single_ovrating d-flex align-items-center">
							<div className="rating_star">
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
							</div>
							<div className="rating_pbox">
								<span style={{ width: '0%' }}></span>
							</div>
							<p className="rating_count">0</p>
						</div>
						<div className="single_ovrating d-flex align-items-center">
							<div className="rating_star">
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
							</div>
							<div className="rating_pbox">
								<span style={{ width: '0%' }}></span>
							</div>
							<p className="rating_count">0</p>
						</div>
						<div className="single_ovrating d-flex align-items-center">
							<div className="rating_star">
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
							</div>
							<div className="rating_pbox">
								<span style={{ width: '0%' }}></span>
							</div>
							<p className="rating_count">0</p>
						</div>
					</div>
				</div>
				<div className="review_header d-flex align-items-center justify-content-between">
					<p className="m-0 text-semibold">Product Reviews</p>
					<div className="review_filters">
						<select className="nice_select" style={{ display: 'none' }}>
							<option value="">Sort by</option>
							<option value="">Price low-high</option>
							<option value="">Price high-low</option>
						</select>
						<div className="nice-select nice_select">
							<span className="current">Sort by</span>
							<ul className="list">
								<li data-value="" className="option selected">
									Sort by
								</li>
								<li data-value="" className="option">
									Price low-high
								</li>
								<li data-value="" className="option">
									Price high-low
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="review_cont_wrap">
					<div className="single_review_wrp">
						<div className="review_avatar">
							<img loading="lazy" src="assets/images/avatar.png" alt="user" />
						</div>
						<div className="review_content">
							<h5>by Sadat A.</h5>
							<div className="rating_star">
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
							</div>
							<div className="review_date">30 Jul 2021</div>
							<div className="review_body">
								<p>
									Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
									sollicitudin, lorem quis bibendum auctor, nisi elit consequat
									ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
									nibh vulputate
								</p>
								<div className="review_imgs">
									<img
										loading="lazy"
										src="assets/images/product.png"
										alt="review"
									/>
									<img
										loading="lazy"
										src="assets/images/product.png"
										alt="review"
									/>
									<img
										loading="lazy"
										src="assets/images/product.png"
										alt="review"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="single_review_wrp border-bottom-0 mb-0 pb-0">
						<div className="review_avatar">
							<img loading="lazy" src="assets/images/avatar.png" alt="user" />
						</div>
						<div className="review_content">
							<h5>by Sadat A.</h5>
							<div className="rating_star">
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="las la-star"></i>
								</span>
								<span>
									<i className="lar la-star"></i>
								</span>
							</div>
							<div className="review_date">30 Jul 2021</div>
							<div className="review_body">
								<p>
									Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
									sollicitudin, lorem quis bibendum auctor, nisi elit consequat
									ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
									nibh vulputate
								</p>
								<div className="review_imgs">
									<img
										loading="lazy"
										src="assets/images/product.png"
										alt="review"
									/>
									<img
										loading="lazy"
										src="assets/images/product.png"
										alt="review"
									/>
									<img
										loading="lazy"
										src="assets/images/product.png"
										alt="review"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default ProductDescription;
